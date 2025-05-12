from textual.app import App, ComposeResult
from textual.widgets import Footer, Header, Input, Label, Button
import tomlkit
import time
import os

class MLSetup(App):
    def compose(self) -> ComposeResult:
        yield Header()
        yield Label("\n")
        yield Label("MusicLine must be configured before you use it.\n")
        yield Label("You must enter your music folder's path.\n")
        yield Input(placeholder="Enter music path here...", type="text")
        yield Label("\n")
        yield Button("Save config", action=self.to_toml)
        yield Footer()

    def to_toml(self):
        music_path = self.query_one(Input).value
        self.notify(music_path)
        time.sleep(1)
        if not os.path.exists(music_path):
            self.notify("The path doesn't exists.\nNOTE: For home directory, you must enter the full path. Tilde (~) not allowed.")
        config = tomlkit.document()
        config.add(tomlkit.comment("This is a configuration file for the MusicLine application."))
        config.add(tomlkit.comment("It contains settings for the application, including the music directory path."))
        config.add(tomlkit.nl())
        config.add(tomlkit.comment("This is an auto-generated file by the MLSetup application."))
        config.add(tomlkit.comment("You probably didn't have this file before running MusicLine."))
        config.add(tomlkit.comment("MusicLine automatically runs MLSetup to create this file if it doesn't exist."))
        config.add(tomlkit.comment("If you want to change the music directory, you can do so by modifying this file."))
        config.add(tomlkit.nl())
        config.add("music_path", music_path)
        f = open(os.path.expanduser('~/.config/musicline.conf'))
        toml = config.as_string()
        f.write(toml)
        print("Run musicline again to use it.")
        self.exit(0)
        

if __name__ == '__main__':
    app = MLSetup()
    app.run()
