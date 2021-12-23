var names=new Array();
names[0]="Yni";
names[1]="Jitu";
names[2]="Jinu";
names[3]="jack";
names[4]="pinki";
names[5]="faltu";
names[6]="lany";
names[7]="panik";
names[8]="labis";
names[9]="jitu";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}