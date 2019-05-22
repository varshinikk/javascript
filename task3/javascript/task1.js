var month=2;
var year = 2015;
var answer;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "leap year 29 days";
} else {
        answer = "28 days";
}
switch(month){
	case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
	document.write("31 days");
	break;
	case 2:
	document.write(answer);
	break;
	case 4:
	case 6:
	case 9:
	case 11:
	document.write("30 days");
	break;
	default:
	document.write("invalid month");
	break;
}