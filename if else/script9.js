var courses = ["JavaScript", "Python", "React", "NodeJS"];
var userCourse = prompt("Enter the course name you are looking for:");
if (userCourse) {
    var trimmedCourse = userCourse.trim();
    
    var found = courses.some(function(course) {
        return course.toLowerCase() === trimmedCourse.toLowerCase();
    });

    if (found) {
        alert("The course already exists in the list!");
    } else {
        courses.push(trimmedCourse);
        alert("The course has been added successfully!");
    }

    console.log("Current courses list:", courses);
} else {
    alert("You did not enter any name.");
}