const validate = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/validate`, {
            method: "GET",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Muqeem ${token}`
            }
        });
        const res = await response.json();
        if (res.message === "Technical Error") {
            alert("OOPs some problem occured");
            dispatch(setLogout());
            navigate("/");
        }
        else if (res.message === "unauthorized") {
            dispatch(setLogout());
            navigate("/");
        }
        dispatch(updateUser({
            user: res.user
        }));
        setIsLoadingDone(true);
    }
    catch (error) {
        
    }
}