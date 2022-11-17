import styles from "../styles/styles.module.scss"

const Posts = () => {
    return (
        <div className="col-md-8 px-4">
            <div className="card mb-4">
                <div className="card-header" id={styles.postHeader}>
                   <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-9">
                            ali sattar
                            <p className="card-text"><small className="text-muted">posted on 2022-11-01</small></p>
                        </div>
                        <p className="pt-3">Like</p>
                   </div>
                </div>
                <div className="card-body">    
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content 
                        <a href="/" className="ms-2">read more</a>
                    </p>
                </div>
                <div className="card-footer bg-transparent">
                    <span className="badge bg-secondary me-2">django</span>
                    <span className="badge bg-secondary me-2">backend</span>
                    <span className="badge bg-secondary me-2">rest api</span>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header" id={styles.postHeader}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-9">
                            ali sattar
                            <p className="card-text"><small className="text-muted">posted on 2022-11-01</small></p>
                        </div>
                        <p className="pt-3">Like</p>
                   </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content 
                        <a href="/" className="ms-2">read more</a>
                    </p>
                </div>
                <div className="card-footer bg-transparent">
                    <span className="badge bg-secondary me-2">django</span>
                    <span className="badge bg-secondary me-2">backend</span>
                    <span className="badge bg-secondary me-2">rest api</span>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header" id={styles.postHeader}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-9">
                            ali sattar
                            <p className="card-text"><small className="text-muted">posted on 2022-11-01</small></p>
                        </div>
                        <p className="pt-3">Like</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content
                        <a href="/" className="ms-2">read more</a>
                    </p>
                </div>
                <div className="card-footer bg-transparent">
                    <span className="badge bg-secondary me-2">django</span>
                    <span className="badge bg-secondary me-2">backend</span>
                    <span className="badge bg-secondary me-2">rest api</span>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header" id={styles.postHeader}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-md-9">
                            ali sattar
                            <p className="card-text"><small className="text-muted">posted on 2022-11-01</small></p>
                        </div>
                        <p className="pt-3">Like</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content  
                        <a href="/" className="ms-2">read more</a>
                    </p>
                </div>
                <div className="card-footer bg-transparent">
                    <span className="badge bg-secondary me-2">django</span>
                    <span className="badge bg-secondary me-2">backend</span>
                    <span className="badge bg-secondary me-2">rest api</span>
                </div>
            </div>
        </div>
    )
}

export default Posts