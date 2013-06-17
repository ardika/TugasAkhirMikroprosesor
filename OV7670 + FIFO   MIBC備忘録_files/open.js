function showMore(varA1, varB1){ 
var123 = ('varXYZ' + (varA1)); 
varABC = ('varP' + (varA1)); 
if( document.getElementById ) { 
if( document.getElementById(var123).style.display ) { 
if( varB1 != 0 ) { 
document.getElementById(var123).style.display = "block"; 
document.getElementById(varABC).style.display = "none"; 
} else { document.getElementById(var123).style.display = "none"; 
document.getElementById(varABC).style.display = "block"; } 
} else { location.href = varB1; 
return true; } 
} else { location.href = varB1; 
return true; } 
}