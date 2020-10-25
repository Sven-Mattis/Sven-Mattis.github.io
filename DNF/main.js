function dnf() {
    // Variables
    let row = document.querySelectorAll(".row"), input = document.querySelectorAll(".input"), q = document.querySelectorAll(".erg"),
    dnf = "", counter = 0,
    erg = [];
    // Loop for every row
    for(i in row){
        // Not the Headline
        // Table start at 1
        if(i > 0){
            // Get the input an save in a b or c
            let a = 0, b = 0, c = 0;
            for(var x = 0; x+counter <= counter+3; x++){
                // Check if a b or c
                if(counter != 0){
                    (x == 1) ? a=input[(counter+x)].value : (x == 2) ? b=input[(counter+x)].value : (x == 3) ? c=input[(counter+x)].value : x=x; // Catch Error
                } else {
                    // Fixing the problem with the Array
                    (x == 0) ? a=input[(counter+x)].value : (x == 1) ? b=input[(counter+x)].value : (x == 2) ? c=input[(counter+x)].value : x=x; // Catch Error
                }
            }
            // fixing the problem with the Array
            (counter == 0) ? counter = 2 : counter += 3;
            // check if Q is 1
            if(q[i-1].value == 1){
                // make the negation or just do nothing
                (a == 0) ? a="&not;a" : a="a";
                (b == 0) ? b="&not;b" : b="b";
                (c == 0) ? c="&not;c" : c="c";
                // append to array
                erg.push({
                    a: a,
                    b: b,
                    c: c
                })
            }
        }
    }

    // For print the result

    // Make the finish String
    // Loop through the array
    for(i in erg){
        // Check if is last item, if yes dont print the or
        // otherwise do
        (i == erg.length-1) ? dnf += "( " + erg[i].a + " &and; " + erg[i].b + " &and; " + erg[i].c + " )" : dnf += "( " + erg[i].a + " &and; " + erg[i].b + " &and; " + erg[i].c + " )  &or;  "
    }
    // Print the String
    document.getElementById("fillInResult").innerHTML = "DNF: "+dnf;
}