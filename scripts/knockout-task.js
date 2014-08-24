var listOfReferences = {
	"References" : [
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "О компании QAP INT.",
			"checkbox": "true"
		}, 
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "Преимущества использования CLM-инструмента для Вашего бизнеса.",
			"checkbox": "true"
		},
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "Перспективы сотрудничества с QAP INT.",
			"checkbox": "true"
		},
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "Описание решения для разработки HTML5-презентаций.",
			"checkbox": "true"
		},
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (русский).",
			"checkbox": "true"
		},
		{
			"img": "assets/images/ico-adobe.png",
			"alt": "pdf-ico",
			"title": "Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (english).",
			"checkbox": "true"
		}
	]
}
function ReservationsViewModel(email, text, textarea, popupActive, ShowAll){
	var self = this,
		index = 1;
	self.References = listOfReferences.References;
	self.References.forEach(function(key){
		key.index = index++;
		key.isChecked = ko.observable(true);
	});

	self.isCheckedReferences = ko.computed(function() {
    	var arrowReferences = [];
        self.References.forEach(function(value) {
            if(value.isChecked()) {
                arrowReferences.push(value);
            }
        });
        return arrowReferences;
     },self);
	
    self.email = ko.observable(email);
    self.text = ko.observable(text);
    self.textarea = ko.observable(textarea);
    self.popupActive = ko.observable(popupActive);      
    this.ShowAll = function() {     	   	
    	this.popupActive('popupActive');
    };
    this.back = function(){
    	this.popupActive('');
    };
}
ko.applyBindings(new ReservationsViewModel());