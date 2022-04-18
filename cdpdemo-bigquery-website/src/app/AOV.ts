export class AOV
{

    Email:string;
    Orders:string;
    Total_spend:string;
    AOV:string;

    aovCol : string[] = ["Email","Orders" ,"Total_spend", "AOV"];
    constructor(email: string, Orders: string, Total_spend: string,AOV: string)
    {
        this.Email = email;
        this.Orders = Orders;
  
        this.Total_spend = Total_spend;
        this.AOV = AOV;
    }


}