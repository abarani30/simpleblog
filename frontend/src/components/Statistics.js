const Statistics = () => {
    return (
        <div className="col-md-4 px-4">
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Most Liked:
                </div>
                <div className="card-body">
                    <ol className="mb-2">
                        <li className="mb-2">
                            Introduction to Python
                        </li>
                        <li className="mb-2">
                            10 Things i wish i know before learn how to code
                        </li>
                        <li className="mb-2">
                            Static types Vs. Dynamic types
                        </li>
                    </ol>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Total Posts by users:
                </div>
                <div className="card-body">
                    <ol className="mb-2">
                        <li className="mb-2">
                            ali sattar <i>(10 posts)</i>
                        </li>
                        <li className="mb-2">
                            ahmed ali <i>(8 posts)</i>
                        </li>
                        <li className="mb-2">
                            mohammed amin <i>(5 posts)</i>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Statistics