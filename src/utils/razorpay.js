export const openrazorpay = ({
    order,
    user,
    onSucess,
    onFailure
})=>{
    if(!window.Razorpay){
        //if the razorpay script insdie index fails 
        alert("RazorPay Sdk not loaded");
        return;
    }
    const options = {

        key: "rzp_test_SesPNOLIVaSED3", // replace
        amount: order.amount,
        currency: order.currency,
        order_Id: order.id,
        name: "ShopX",
        description: "Order Payment",
    // handler 
    handler: function (response){
        onSucess(response);
    },
    modal:{
        ondismiss: function (){
            onFailure && onFailure();
        }
    },
    // prefill
    prefill: {
        name: user?.name || "user",
        email: user?.email || "user@email.com",
        contact: user?.phone || "7885154864"
    },
    // theme
      theme: {
      color: "#000000",
    },
    }
    const rsz = new window.Razorpay(options);
    rsz.open();
}