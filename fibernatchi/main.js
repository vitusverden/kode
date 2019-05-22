var current = [1, 1]
function next() {
    current[current.length] = current[current.length - 1] + current[current.length - 2];
    document.getElementById("here") = current;
}
