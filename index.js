const SettingsUI = require('tera-mod-ui').Settings;

module.exports = function TEST(mod) {
	// Settings UI
	let ui = null;
	if (global.TeraProxy.GUIMode) {
		ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 175 });
		ui.on('update', settings => mod.settings = settings);
		this.destructor = () => {
			if (ui) {
				ui.close();
				ui = null;
			}
		};
	}
	
	mod.command.add("ui", () => {
		ui.show();
	})
	// tera-data-parser
	let Readable;
	try {
		({Readable} = require('tera-data-parser/lib/protocol/stream'));
	} catch (e) {
		({Readable} = require('tera-data-parser/protocol/stream'));
	}
	
	let Stream;
	mod.command.add("hook", () => {
		mod.command.message("start listening once " + mod.settings.DefName);
		mod.log("start listening once " + mod.settings.DefName);
		
		mod.hookOnce(mod.settings.DefName, 'raw', (code, data) => {
			Stream = new Readable(data);
			mod.command.message("already listend once " + mod.settings.DefName + " data!");
			mod.log("already listend once " + mod.settings.DefName + " data!");
		})
	})
	
	mod.command.add("log", () => {
		if (!Stream) return;
		
		Stream.position = mod.settings.Position;
		mod.log(mod.settings.Position + " - " + mod.settings.DefType);
		
		switch(mod.settings.DefType) {
			case "byte1":
				mod.log(Stream.byte());
				break;
			case "uint16":
				mod.log(Stream.uint16());
				break;
			case "int16":
				mod.log(Stream.int16());
				break;
			case "uint32":
				mod.log(Stream.uint32());
				break;
			case "int32":
				mod.log(Stream.int32());
				break;
			case "uint64":
				mod.log(Stream.uint64());
				break;
			case "int64":
				mod.log(Stream.int64());
				break;
			case "skillid":
				mod.log(Stream.skillid());
				break;
			case "vec3":
				mod.log(Stream.vec3());
				break;
			case "angle":
				mod.log(Stream.angle());
				break;
		}
	})
}
