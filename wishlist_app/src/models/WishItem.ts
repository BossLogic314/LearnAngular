export class WishItem {
    public wishText: string;
    public isDone: boolean;

    constructor(wishText: string, isDone: boolean)
    {
        this.wishText = wishText;
        this.isDone = isDone;
    }
}