// UC1--first name start with capital letter
{
    const regEx = RegExp(/^[A-Z]{1}[A-Za-z]{4,}$/);
    let result = regEx.test("Pratik")
    console.log("FirstName ===>", result);

}