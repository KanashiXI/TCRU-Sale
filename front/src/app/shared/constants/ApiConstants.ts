export class ApiConstants {
    public static get baseURl(): string {
        return 'http://127.0.0.1:8000';
    }
    public static get provinceURl(): string {
        return '/api/province';
    }
    public static get aumphureURl(): string {
        return '/api/amphures';
    }
    public static get districtURl(): string {
        return '/api/districts';
    }
    public static get daddressURl(): string {
        return '/api/shipaddress';
    }
    public static get editressURl(): string {
        return '/api/editshipaddress';
    }
    public static get getoneaddressURL(): string {
        return '/api/oneaddress';
    }
    public static get gettaxURL(): string {
        return '/api/tax';
    }
    public static get getonetaxURL(): string {
        return '/api/onetax';
    }
    public static get edittaxURL(): string {
        return '/api/edittax';
    }

    public static get productURL(): string {
        return '/api/product';
    }
    public static get productdetailURL(): string {
        return '/api/productdetail';
    }

    public static get getcartproductURL(): string {
        return '/api/cartlist';
    }

    public static get searchcartproductURL(): string {
        return '/api/searchproduct';
    }

    public static get addproductcartURL(): string {
        return '/api/addproductcart';
    }
    public static get addmoreproductcartURL(): string {
        return '/api/editproduct';
    }







}