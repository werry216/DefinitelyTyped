import * as React from "react";
import ReactPaginate = require("react-paginate");

class Test extends React.Component<{}, {}> {

    private onClick(obj: any): void {
        //
    }

    render() {
        return (
            <ReactPaginate
                pageCount={1}
                pageRangeDisplayed={10}
                marginPagesDisplayed={2}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'break-me'}
                breakClassName={'break-class'}
                onPageChange={(nr: number) => this.onClick(nr)}
                initialPage={2}
                forcePage={3}
                disableInitialCallback={false}
                containerClassName={'container'}
                pageClassName={'page-li'}
                pageLinkClassName={'page-a'}
                activeClassName={'active'}
                previousClassName={'previous-li'}
                nextClassName={'next-li'}
                previousLinkClassName={'previous-a'}
                nextLinkClassName={'next-a'}
                disabledClassName={'disabled'}
                hrefBuilder={(a: string) => this.onClick(a)}
            />
        );
    }
}
