const submitForm = async (values, onSubmitProps) => {
    try {
        if (isRegisterType) {
            const formdata = new FormData();
            for (var key in values)
                formdata.append(key, values[key]);

            if (values.image)
                formdata.append("imagePath", values.image.name);

            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`,{
                method: "POST",
                body: formdata
            });
            const res = await response.json();
            setTimeout(() => {
                onSubmitLoad(false);
                if (res.status === 201) {
                    alert("Registration Successful");
                    onSubmitProps.resetForm();
                    setPageType("login");
                }
                else if (res.error === "email already exists")
                    alert("Email already exists");

                else
                    alert("Enter valid inputs");

            }, 1000);
        }
        else {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            const res = await response.json();
            console.log(res);
            setTimeout(() => {
                onSubmitLoad(false);
                if (res.status === 200){
                    dispatch(setLogin({
                        user : res.foundUser,
                        token : res.token
                    }));
                    onSubmitProps.resetForm();
                    navigate("/home");
                }
                else if (res.message === "Invalid Credentials")
                    alert("Invalid Credentials");
                else
                    alert("OOps some error popped!");
            }, 1000)
        }
    }
    catch (error) {

    }
}
