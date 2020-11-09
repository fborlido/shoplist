import React from 'react'

function Form() {
    return (
        <section className="section">
            <div className="container is-mobile">
                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input type="text" className="input" placeholder="Enter your item" />
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">Add</button>                </div>
                </div>
            </div>
        </section>
    )
}

export default Form
