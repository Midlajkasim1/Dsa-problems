const studentdetails = ['erick','john','abhiram','ashiq','tony'];

function checkstudent(allStudent,serchStd){
    for(let i=0;i<allStudent.length;i++){
        if(allStudent[i]==serchStd){
            console.log(`founded ${serchStd}`);

        }
    }
}

checkstudent(studentdetails,'tonys')