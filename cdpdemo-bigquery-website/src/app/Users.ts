export class Users
{
    Address:string;
    Name:string;
    Email:string;
    city:string;
    country:string;
    primaryKey:string;


    constructor(address: string,name: string, email: string, city: string, country: string, primaryKey: string)
    {
        this.Address = address;
        this.Name = name;
        this.Email = email;
        this.city = city;
        this.country = country;
        this.primaryKey = primaryKey;
    }


}