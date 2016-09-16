;(function ($) {
	function Human (name) {
		this.name = name;
		this.age = 20;
		this.gender = 'man';
		this.growth = 200;
		this.weigth = 90;
	}

	function Worker (name) {
		Human.apply(this, arguments);
		this.placeWork = 'IT company';
		this.salary = 15000;
	}

	Worker.prototype.work = function() {
		 alert('Hello job');
	};

	function Student (name) {
		Human.apply(this, arguments);	  
		this.placeLearn = 'Garvard';
		this.stipend = 1000;
	}

	Student.prototype.watchSerial = function(serial){
		 alert( 'serial' + ' ' + '- cool');
	};

	var worker = new Worker('Paul');
	var student = new Student('Crowl');
	console.log(worker.name);
	worker.work()
	console.log(student.name);
	student.watchSerial();
	alert('hiii');
})(jQuery);