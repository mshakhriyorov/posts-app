import React, { Component } from 'react';




class Modal extends Component {
    render() {
        let modalStyle = {
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }
        return (
            <>
                <div className="modal show fade" role="dialog" style={modalStyle} key={this.props.id}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content mt-5">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ textAlign: 'center' }}>{this.props.title}</h5>
                                <button type="button" className="btn-close btn-danger" onClick={this.props.hide} />
                            </div>
                            <div className="modal-body">
                                <img src="https://admnvrsk.ru/upload/resize_cache/iblock/440/600_600_2/440d8445edc9f9527669db6dd078219d.jpg" alt={this.props.title} className="img-fluid" />
                                <p>{this.props.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;