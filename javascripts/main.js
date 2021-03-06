/* Code taken from Sublime Text 2 website */
var content = [
	document.getElementById("content1"),
	document.getElementById("content2"),
	document.getElementById("content3")
];

var animation_urls = [
	"anim/cap_packed.png",
	"anim/cap_packed.png",
	"anim/cap_packed.png"
];

cap_timeline = [{"delay": 1, "blit": [[0, 0, 917, 493, 0, 0]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": []}, {"delay": 1, "blit": []}, {"delay": 1, "blit": []}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[0, 493, 625, 493, 0, 0], [689, 709, 187, 14, 626, 48], [903, 565, 2, 1, 915, 492]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[916, 624, 1, 14, 64, 48]]}, {"delay": 1, "blit": [[916, 564, 1, 2, 813, 36], [876, 709, 8, 14, 64, 48], [31, 478, 7, 10, 90, 478]]}, {"delay": 1, "blit": [[916, 562, 1, 2, 814, 36], [885, 709, 8, 14, 71, 48], [650, 829, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[813, 38, 4, 2, 813, 36], [888, 572, 28, 14, 65, 48], [892, 812, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[911, 518, 1, 2, 817, 36], [908, 786, 9, 15, 92, 48], [910, 801, 7, 11, 90, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[911, 684, 3, 2, 817, 36], [456, 1168, 329, 182, 92, 48], [906, 812, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[915, 614, 1, 14, 106, 48]]}, {"delay": 1, "blit": [[914, 682, 3, 2, 819, 36], [300, 2704, 304, 33, 106, 48], [22, 1638, 152, 12, 121, 85], [22, 1657, 194, 12, 121, 104], [22, 1676, 145, 12, 121, 123], [22, 1695, 180, 12, 121, 142], [0, 2505, 319, 69, 100, 161], [903, 801, 7, 11, 90, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[910, 568, 4, 2, 821, 36], [313, 2234, 321, 145, 100, 48], [898, 775, 14, 11, 90, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[916, 610, 1, 14, 141, 48]]}, {"delay": 1, "blit": [[915, 600, 1, 14, 141, 48]]}, {"delay": 1, "blit": [[806, 811, 86, 16, 64, 48], [625, 841, 257, 12, 6, 478]]}, {"delay": 1, "blit": [[903, 566, 14, 2, 813, 36], [0, 1419, 321, 182, 142, 48], [909, 747, 8, 10, 256, 478]]}, {"delay": 1, "blit": [[888, 690, 2, 2, 826, 36], [0, 2702, 300, 34, 152, 48], [689, 775, 68, 29, 163, 85], [300, 1476, 10, 6, 442, 103], [792, 735, 61, 10, 233, 104], [728, 877, 117, 10, 163, 123], [764, 747, 131, 12, 163, 142], [764, 735, 138, 12, 163, 161], [689, 811, 117, 12, 163, 180], [0, 2574, 300, 19, 152, 195], [909, 672, 8, 10, 256, 479]]}, {"delay": 1, "blit": [[916, 596, 1, 14, 162, 48]]}, {"delay": 1, "blit": [[915, 586, 1, 14, 162, 48], [908, 618, 7, 38, 443, 68]]}, {"delay": 1, "blit": [[914, 586, 1, 14, 162, 48], [895, 521, 10, 40, 442, 67], [911, 493, 6, 11, 152, 478]]}, {"delay": 1, "blit": [[911, 682, 3, 2, 827, 36], [456, 986, 346, 182, 143, 48], [899, 813, 7, 10, 257, 479]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[903, 563, 2, 2, 829, 36], [0, 2652, 319, 50, 170, 48], [896, 801, 7, 11, 257, 478], [899, 813, 7, 10, 152, 479]]}, {"delay": 1, "blit": [[904, 654, 3, 2, 829, 36], [878, 666, 23, 16, 176, 48], [764, 853, 7, 11, 257, 478]]}, {"delay": 1, "blit": [[901, 654, 3, 2, 831, 36], [878, 650, 23, 16, 190, 48], [895, 747, 14, 11, 250, 478]]}, {"delay": 1, "blit": [[904, 652, 3, 2, 833, 36], [878, 634, 23, 16, 204, 48], [909, 736, 7, 11, 257, 478]]}, {"delay": 1, "blit": [[901, 650, 7, 2, 830, 36], [862, 759, 50, 16, 184, 48], [888, 791, 8, 11, 256, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[903, 563, 2, 2, 836, 36], [901, 865, 16, 16, 225, 48], [885, 725, 8, 10, 256, 479]]}, {"delay": 1, "blit": [[901, 652, 3, 2, 836, 36], [0, 1783, 320, 182, 225, 48], [0, 2365, 7, 11, 257, 478]]}, {"delay": 1, "blit": [[878, 493, 10, 109, 526, 63]]}, {"delay": 1, "blit": [[915, 648, 2, 2, 838, 36], [895, 493, 16, 28, 239, 48], [689, 763, 173, 12, 240, 85], [806, 735, 54, 10, 366, 104], [689, 735, 75, 28, 289, 107], [15, 1820, 49, 12, 240, 123], [141, 1839, 54, 10, 366, 123], [905, 521, 7, 45, 275, 145], [898, 786, 10, 15, 526, 168], [905, 521, 7, 7, 310, 202], [899, 812, 7, 11, 257, 478]]}, {"delay": 1, "blit": [[913, 586, 1, 14, 246, 48]]}, {"delay": 1, "blit": [[903, 570, 7, 2, 839, 36], [320, 1714, 320, 182, 225, 48], [902, 736, 14, 11, 250, 478]]}, {"delay": 1, "blit": [[912, 586, 1, 14, 288, 48]]}, {"delay": 1, "blit": [[625, 595, 253, 102, 626, 38], [0, 2593, 623, 30, 2, 48], [85, 2085, 139, 12, 149, 78], [163, 78, 210, 12, 163, 92], [65, 92, 455, 68, 65, 106], [275, 92, 98, 12, 275, 106], [813, 140, 104, 14, 813, 142], [813, 156, 81, 82, 813, 158], [185, 162, 243, 26, 185, 176], [65, 148, 97, 12, 65, 204], [163, 190, 133, 12, 163, 204], [689, 697, 223, 12, 65, 218], [290, 204, 181, 26, 290, 218], [813, 240, 104, 42, 813, 242], [65, 232, 406, 12, 65, 246], [440, 2761, 370, 12, 65, 260], [100, 260, 335, 12, 100, 274], [813, 284, 104, 187, 813, 286], [65, 767, 133, 12, 65, 288], [205, 274, 195, 12, 205, 288], [0, 2773, 343, 12, 65, 302], [65, 302, 343, 12, 65, 316], [65, 316, 426, 96, 65, 330], [65, 414, 315, 12, 65, 428], [845, 881, 68, 10, 65, 442], [689, 723, 196, 12, 135, 442], [67, 442, 452, 17, 67, 456], [625, 829, 257, 12, 6, 478]]}, {"delay": 1, "blit": [[911, 586, 1, 14, 64, 62]]}, {"delay": 1, "blit": [[915, 646, 2, 2, 813, 38], [881, 775, 17, 16, 64, 62], [31, 478, 7, 10, 90, 478]]}, {"delay": 1, "blit": [[915, 644, 2, 2, 814, 38], [885, 709, 17, 16, 71, 62], [650, 829, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[903, 566, 5, 2, 813, 38], [878, 602, 37, 16, 65, 62], [892, 812, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[903, 563, 2, 2, 817, 38], [328, 1350, 322, 182, 92, 62], [910, 801, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[912, 564, 4, 2, 817, 38], [516, 2069, 311, 165, 92, 62], [35, 2365, 7, 11, 90, 478]]}, {"delay": 1, "blit": [[915, 642, 2, 2, 820, 38], [0, 1601, 320, 182, 92, 62], [903, 801, 7, 11, 90, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[916, 582, 1, 14, 120, 62]]}, {"delay": 1, "blit": [[916, 568, 1, 14, 120, 62]]}, {"delay": 1, "blit": [[878, 688, 33, 4, 813, 36], [625, 897, 231, 2, 65, 48], [911, 504, 2, 14, 64, 50], [0, 2176, 313, 156, 66, 50], [625, 697, 64, 132, 392, 73], [827, 735, 26, 10, 324, 118], [625, 853, 251, 12, 6, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[915, 640, 2, 2, 824, 38], [0, 1237, 328, 182, 135, 62], [757, 799, 118, 12, 145, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[915, 638, 2, 2, 825, 38], [0, 1965, 304, 104, 148, 62], [757, 787, 124, 12, 156, 175], [728, 887, 103, 10, 156, 194], [625, 877, 103, 12, 156, 213], [909, 736, 6, 11, 152, 478], [909, 747, 8, 11, 256, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[916, 546, 1, 14, 155, 62], [888, 493, 7, 79, 443, 78], [895, 561, 8, 11, 151, 478]]}, {"delay": 1, "blit": [[914, 568, 2, 2, 826, 38], [321, 1532, 320, 182, 143, 62], [909, 672, 8, 10, 256, 479]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[915, 546, 1, 14, 162, 62], [901, 672, 8, 10, 151, 479]]}, {"delay": 1, "blit": [[903, 563, 2, 2, 827, 38], [901, 865, 16, 16, 162, 62], [0, 2365, 7, 11, 257, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[881, 791, 7, 16, 163, 62], [0, 2365, 296, 12, 152, 478]]}, {"delay": 1, "blit": [[878, 692, 16, 2, 813, 38], [320, 2486, 322, 107, 162, 62]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[914, 546, 1, 14, 169, 62]]}, {"delay": 1, "blit": [[911, 600, 3, 2, 828, 38], [319, 2652, 304, 52, 169, 62], [404, 2692, 14, 7, 275, 121], [404, 2692, 14, 7, 233, 140], [896, 801, 7, 11, 441, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[913, 546, 1, 14, 183, 62]]}, {"delay": 1, "blit": [[912, 560, 5, 2, 830, 38], [320, 2379, 322, 107, 162, 62], [902, 725, 14, 11, 434, 478]]}, {"delay": 1, "blit": [[908, 568, 2, 2, 834, 38], [901, 865, 16, 16, 211, 62], [909, 736, 6, 11, 441, 478]]}, {"delay": 1, "blit": [[912, 562, 4, 2, 834, 38], [878, 618, 30, 16, 211, 62], [911, 493, 6, 11, 441, 478]]}, {"delay": 1, "blit": [[913, 570, 3, 2, 837, 38], [888, 586, 23, 16, 232, 62], [899, 813, 7, 10, 441, 479]]}, {"delay": 1, "blit": [[903, 561, 2, 2, 839, 38], [885, 634, 16, 16, 246, 62], [896, 801, 7, 11, 441, 478]]}, {"delay": 1, "blit": [[903, 568, 7, 2, 836, 38], [860, 865, 57, 16, 219, 62], [139, 2737, 14, 11, 434, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[915, 532, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[912, 546, 1, 14, 267, 62]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[901, 634, 7, 16, 261, 62], [0, 2749, 776, 12, 6, 478], [723, 478, 78, 12, 826, 478]]}, {"delay": 1, "blit": [[916, 532, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[915, 532, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[901, 634, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[320, 1896, 320, 173, 260, 71], [0, 2737, 776, 12, 6, 478], [826, 478, 78, 12, 826, 478]]}, {"delay": 1, "blit": [[914, 532, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[913, 532, 1, 14, 267, 62]]}, {"delay": 1, "blit": [[910, 570, 3, 2, 841, 38], [0, 2332, 311, 33, 260, 62], [757, 775, 124, 12, 275, 99], [0, 2379, 320, 126, 260, 118], [902, 747, 7, 11, 441, 478]]}, {"delay": 1, "blit": [[912, 532, 1, 14, 274, 62]]}, {"delay": 1, "blit": [[916, 518, 1, 14, 274, 62]]}, {"delay": 1, "blit": [[878, 682, 33, 6, 813, 38], [0, 2069, 516, 107, 64, 62], [0, 2761, 440, 12, 8, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[901, 656, 14, 16, 268, 62]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[915, 518, 1, 14, 274, 62]]}, {"delay": 1, "blit": [[625, 493, 253, 102, 626, 40], [0, 2623, 623, 29, 2, 62], [0, 986, 456, 251, 64, 91], [325, 81, 62, 36, 325, 109], [387, 106, 132, 24, 387, 134], [813, 140, 104, 14, 813, 144], [813, 156, 81, 82, 813, 160], [813, 240, 104, 42, 813, 244], [813, 284, 104, 185, 813, 288], [65, 316, 426, 96, 65, 344], [65, 414, 315, 12, 65, 442], [65, 428, 452, 17, 65, 456], [625, 865, 235, 12, 6, 478]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[902, 709, 10, 16, 64, 75]]}, {"delay": 1, "blit": [[914, 518, 1, 14, 64, 76]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[913, 518, 1, 14, 64, 76]]}, {"delay": 1, "blit": [[912, 518, 1, 14, 64, 76]]}, {"delay": 1, "blit": [[916, 504, 1, 14, 64, 76]]}, {"delay": 1, "blit": [[915, 504, 1, 14, 64, 76]]}, {"delay": 1, "blit": []}, {"delay": 1, "blit": [[914, 504, 1, 14, 64, 76]]}, {"delay": 55, "blit": [[913, 504, 1, 14, 64, 76]]}];

var animation_timelines = [
	cap_timeline,
	cap_timeline,
	cap_timeline
];

var cur_content = 0;
var auto_cycle_content = true;

function next() {
	auto_cycle_content = false;
	auto_next();
}

function auto_next() {
	cur_content = (cur_content + 1) % content.length;
	update_content();
}

function prev() {
	auto_cycle_content = false;
	auto_prev();
}

function auto_prev() {
	--cur_content;
	if (cur_content < 0) cur_content = content.length - 1;

	update_content();
}

function update_content() {
	for (var i = 0; i < content.length; ++i)
		content[i].style.display = (i == cur_content) ? "block" : "none";

	ci = document.getElementById('content_index');
	ci.innerHTML = (cur_content + 1) + " / " + content.length;

	set_animation(animation_urls[cur_content], animation_timelines[cur_content],
		animation_urls[(cur_content + 1) % content.length]);
}

var delay_scale = 100;
var timer = null;

var animate = function(img, timeline, element) {
	var i = 0;

	var run_time = 0;
	for (var j = 0; j < timeline.length - 1; ++j)
		run_time += timeline[j].delay;

	var f = function() {
		var frame = i++ % timeline.length;
		var delay = timeline[frame].delay * delay_scale;
		var blits = timeline[frame].blit;

		var ctx = element.getContext('2d');

		for (j = 0; j < blits.length; ++j) {
			var blit = blits[j];
			var sx = blit[0];
			var sy = blit[1];
			var w = blit[2];
			var h = blit[3];
			var dx = blit[4];
			var dy = blit[5];
			ctx.drawImage(img, sx, sy, w, h, dx, dy, w, h);
		}

		if (i == timeline.length * 2 && auto_cycle_content)
			timer = window.setTimeout(auto_next, delay);
		else
			timer = window.setTimeout(f, delay);
	};

	if (timer) window.clearTimeout(timer);
	f();
};

var animate_fallback = function(img, timeline, element) {
	var i = 0;

	var run_time = 0;
	for (var j = 0; j < timeline.length - 1; ++j)
		run_time += timeline[j].delay;

	var f = function() {
		if (i % timeline.length === 0) {
			while (element.hasChildNodes());
				element.removeChild(element.lastChild);
		}

		var frame = i++ % timeline.length;
		var delay = timeline[frame].delay * delay_scale;
		var blits = timeline[frame].blit;

		for (j = 0; j < blits.length; ++j) {
			var blit = blits[j];
			var sx = blit[0];
			var sy = blit[1];
			var w = blit[2];
			var h = blit[3];
			var dx = blit[4];
			var dy = blit[5];

			var d = document.createElement('div');
			d.style.position = 'absolute';
			d.style.left = dx + "px";
			d.style.top = dy + "px";
			d.style.width = w + "px";
			d.style.height = h + "px";
			d.style.backgroundImage = "url('" + img.src + "')";
			d.style.backgroundPosition = "-" + sx + "px -" + sy + "px";

			element.appendChild(d);
		}

		if (i == timeline.length * 2 && auto_cycle_content)
			timer = window.setTimeout(auto_next, delay);
		else
			timer = window.setTimeout(f, delay);
	};

	if (timer) window.clearTimeout(timer);
	f();
};

function set_animation(img_url, timeline, preload_url) {
	var img = new Image();
	img.onload = function() {
		var canvas = document.getElementById('target');
		if (canvas && canvas.getContext)
			animate(img, timeline, canvas);
		else
			animate_fallback(img, timeline, document.getElementById('fallback'));

		var preload_image = new Image();
		preload_image.src = preload_url;
	};
	img.src = img_url;
}
