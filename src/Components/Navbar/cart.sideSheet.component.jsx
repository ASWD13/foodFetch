import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

const CartSideSheet = () => {
    return (
        <div>
            <SheetHeader>
                <SheetTitle className="text-3xl"> My Cart</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
        </div>
    );
};

export default CartSideSheet;
