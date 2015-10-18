/*
 This is empty on purpose! Your code to build the resume will go here.
 */

/* Header */
var myName = "Alex Bandisch";
var myRole = "Front-End Web Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", myRole));
$("#header").prepend(HTMLheaderName.replace("%data%", myName));

/* Bio */
var bio = {
    "name": "Alex Bandisch",
    "role": "Front-End Web Developer",
    "welcomeMessage": "An ambitious problem solver with a passion for Front-End Web Development!",
    "contacts": {
        "mobile": "+61 433 281 488",
        "email": "alexander.bandisch@gmail.com",
        "location": "Brisbane, Australia",
        "github": "https://github.com/abandisch"
    },
    "pictureURL": "http://i.imgur.com/CXkInEz.jpg",
    "skills": ["Bootstrap 3", "HTML", "JQuery", "CSS", "less", "PHP", "GruntJS", "LAMP Stack"]
};

var contactIcons = {
    "location": "fa-map-marker",
    "email": "fa-envelope",
    "mobile": "fa-mobile",
    "github": "fa-github"
};

/* Contact Info */
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLmobile.replace("%data%", bio.contacts.mobile))
    .append(HTMLlocation.replace("%data%", bio.contacts.location))
    .append(HTMLgithub.replace("%data%", bio.contacts.github));

/* Footer contacts with Font Awesome icons instead of text */
var $footerContacts = $("#footerContacts");
$.each(bio.contacts, function(contactType, contactData) {
    var icon = fontAwesomeIcon.replace("%data%", contactIcons[contactType]);
    var formattedContact = HTMLcontactGeneric.replace("%contact%", icon).replace("%data%", contactData);
    $footerContacts.append(formattedContact);
});

/* Image */
$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));

/* Welcome Message */
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

/* Skills */
if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    $(bio.skills).each(function(index, element) {
        $('#skills').append(HTMLskills.replace("%data%", element));
    });
    $('#skills').removeClass("flex-box");
    $('#skills').find("li").removeClass("flex-item");
}


/* Education */
var formattedSchool, formattedOnlineCourse, education, $educationDiv = $("#education");;
education = {
    "schools" : [
        {
            "name": "USQ",
            "degree": "Bachelor of Information Technology",
            "dates": "2002 - 2004",
            "location": "Toowoomba, Australia",
            "majors": [
                "Networking"
            ],
            "url" : "http://usq.edu.au"
        }
    ],
    "onlineCourses" : [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "August 2015 - March 2016",
            "url": "https://www.udacity.com/"
        }
    ]
};

$(education.schools).each(function(index, schoolElement) {
    formattedSchool = $(HTMLschoolStart)
        .append(HTMLschoolName.replace("%data%", schoolElement.name) + HTMLschoolDegree.replace("%data%", schoolElement.degree))
        .append(HTMLschoolDates.replace("%data%", schoolElement.dates))
        .append(HTMLschoolLocation.replace("%data%", schoolElement.location))
        .append(HTMLschoolMajor.replace("%data%", schoolElement.majors.join(", ")));
    $educationDiv.append(formattedSchool);
});

$educationDiv.append(HTMLonlineClasses);

$(education.onlineCourses).each(function(index, onlineCourseElement) {
    formattedOnlineCourse = $(HTMLschoolStart)
        .append(HTMLonlineTitle.replace("%data%", onlineCourseElement.title) + HTMLonlineSchool.replace("%data%", onlineCourseElement.school))
        .append(HTMLonlineDates.replace("%data%", onlineCourseElement.dates))
        .append(HTMLonlineURL.replace("%data%", onlineCourseElement.url));
    $educationDiv.append(formattedOnlineCourse);
});

/* Work */
var $formattedWork, work;

work = {
    "jobs" : [
        {
            "title": "Project Manager",
            "employer": "PNGConnect",
            "dates": "2014 - Current",
            "location": "Brisbane, Australia",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere sem est, nec sagittis nunc aliquet ac. Quisque convallis dui a erat porttitor, vel faucibus magna ultricies. Vestibulum quis dapibus metus"
        },
        {
            "title": "Implementation Consultant",
            "employer": "GBST",
            "dates": "2006 - 2014",
            "location": "Brisbane, Australia",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere sem est, nec sagittis nunc aliquet ac. Quisque convallis dui a erat porttitor, vel faucibus magna ultricies. Vestibulum quis dapibus metus"
        }
    ]

};

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        $formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $formattedWork = $formattedWork + HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $formattedWork = $formattedWork + HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $formattedWork = $formattedWork + HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append($formattedWork);
    }
};

work.display();

/* Projects */
var formattedProject, projects;

projects = [
    {
        "title": "About Me - Front-End Apprentice",
        "dates": "September 2015",
        "description": "First Project at Udacity, containing a basic introduction to HTML and CSS",
        "image": ["http://i.imgur.com/bnROPgz.jpg"]
    },
    {
        "title": "Build a Portfolio Site",
        "dates": "September 2015",
        "description": "Second Project at Udacity, showing skills in responsive web design",
        "image": ["http://i.imgur.com/FzgwxpR.jpg"]
    }
];

projects.display = function() {

    $(this).each(function(index, element) {
        formattedProject = $(HTMLprojectStart)
            .append(HTMLprojectTitle.replace("%data%", element.title))
            .append(HTMLprojectDates.replace("%data%", element.dates))
            .append(HTMLprojectDescription.replace("%data%", element.description));

        if (element.image.length > 0) {
            formattedProject.append(HTMLprojectImage.replace("%data%", element.image));
        }

        $("#projects").append(formattedProject);
    });

    /* Display Udacity projects next to each other rather than stacked */
    $("#projects").addClass("flex-box");
    $("#projects").find(".project-entry").addClass("flex-item");
    $("#projects").find("h2").addClass("flex-item");
};

projects.display();

/* Google Map */
$("#mapDiv").append(googleMap);

/* International Button */

/* // Commented out ... don't think this is needed for final resume project
 $("#header").append(internationalizeButton);
 function inName() {

 var name = "Alex Bandisch";
 var newName, firstName, lastName, finalName = "";

 newName = name.trim().split(" ");

 if (newName.length === 2) {
 firstName = newName[0].toLowerCase();
 lastName = newName[1].toUpperCase();
 firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
 finalName = firstName + " " + lastName;
 } else {
 return "Valid First and Last name are required";
 }

 return finalName;

 }*/

