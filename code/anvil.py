import board
import neopixel
import time
import digitalio
import audiobusio
from audiocore import WaveFile
import random

# colors
BLACK = (0, 0, 0)
ORANGE  = (255, 153, 51)

# variables
audio = audiobusio.I2SOut(board.GP0, board.GP1, board.GP2)
path = "sounds/"
trigger = digitalio.DigitalInOut(board.GP8)
trigger.switch_to_input(pull=digitalio.Pull.UP)
led_strip = neopixel.NeoPixel(board.GP22, 3)


# "Speed" for randomization of pitch
def sound_speed():
    return random.uniform(0.95, 1.50)

def ran_sound():
    return random.randint(1, 5)

def play_sound(filename, animation=None, slowdown=False, speed=1.0):
    with open(path + filename, "rb") as wave_file:
        wave = WaveFile(wave_file)
        if slowdown and filename == "bang.wav":
            wave.sample_rate = int(wave.sample_rate * speed)
        audio.play(wave)
        sound_started = False
        while audio.playing:
            if not sound_started:
                if animation:
                    led_lights(animation)



def led_lights(animation):
    if animation == "bang.wav":
        led_strip.fill(ORANGE)
        time.sleep(0.1)
        led_strip.fill(BLACK)
        time.sleep(1.18)


trigger_count = 0
trigger_detected = False
trigger_start_time = 0
sound_played = False

while True:
    if not trigger.value:
        if not trigger_detected:
            trigger_start_time = time.monotonic()  # Record the start time
            trigger_detected = True
            speed = sound_speed()  # Change speed every time the trigger is pulled
            ran_sound_count = ran_sound()
            print("new")
            print("random:", ran_sound_count)
        else:
            if trigger_detected and sound_played == False:
                play_sound("bang.wav", animation="bang.wav", slowdown=True, speed=speed)
                trigger_detected = False
                trigger_count += 1
                print("trigger:", trigger_count)
            if ran_sound_count == 3 and trigger_count >= 3 and sound_played == False:
                play_sound("shield.wav", slowdown=True, speed=speed)
            if ran_sound_count == 4 and trigger_count >= 4 and sound_played == False:
                play_sound("flare.wav", slowdown=True, speed=speed)
            sound_played = True
            if trigger_count >= 6:
                trigger_count = 0
    else:  # Button is not pressed
        trigger_detected = False  # Reset detection when the button is released
        sound_played = False  # Reset the sound played flag for the next press

time.sleep(0.01)  # Small delay to debounce the button




