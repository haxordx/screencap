var screencap = require('../index.js');

var screen = screencap({
  		audioCodec: "aac",
		videoCodec: "libx264",
		videoBitrate: "1000k",
		audioBitrate: "96k",
		format: "mp4"
	},'test.mp4');
screen.capture('30');