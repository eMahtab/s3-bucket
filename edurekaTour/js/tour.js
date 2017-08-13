(function(){
    var name = "Jason";
	var tour = new Tour({
		storage : false
	});
	tour.addSteps([
	  {
	    element: ".tour-step.tour-step-one",
	    placement: "bottom",      
        title: "Welcome to edureka!",
	    content: "We would like to know your name? <br><input class='form-control' type='text' name='your_name'>",
	    onNext : function(tour){
	    	var nameProvided = $("input[name=your_name]").val();
	    	if ($.trim(nameProvided) !== ""){
	    		name = nameProvided;
	    	}
	    }
	  },
        
        {
	    element: ".tour-step.tour-step-two",
	    placement: "bottom",            
	    title: function(){ return "Welcome to edureka! , " + name; },
	    content: "We offer instructor led live online classes"
	    },
        
         
        
	  {
	    element: ".tour-step.tour-step-three",
	    placement: "bottom",       
	    title: function(){ return "Welcome to edureka! , " + name; },
	    content: "We offer the flexibility to change the Batch/Class at anytime"
	  },
        
        {
	     element: ".tour-step.tour-step-four",
	     placement: "bottom",       
	     title: function(){ return "Welcome to edureka! , " + name; },
	     content: "We provide 24/7 support to our learners"
	    },
        
        {
	    element: ".tour-step.tour-step-five",
	    placement: "top",    
        backdrop:true,     
	    title: function(){ return "Welcome to edureka! , " + name; },
	    content: "Check out our fresh baked courses"
	    }
        
        ,
        
         
        
         {
	      element: ".tour-step.tour-step-six",
	      placement: "top",           
	      title: function(){ return "Welcome to edureka! , " + name; },
	      content: "Sign Up to get started with edureka!"
	     }
        
        ,
        
        {
	      placement: "top",
          backdrop: true,
	      orphan: true,
	      title: function(){ return "Thank you, " + name; },
	      content: function(){ return "We wish you happy learning with edureka!" }
	    }
        
        
	]);

	// Initialize the tour
	tour.init();
	// Start the tour
	tour.start();
}());