import { Link } from 'react-router-dom';
import React from 'react'

class BreadcrumbsComponent extends React.Component {
    generateBreadCrumb(pathname) {
        let paths = pathname.split("/");
        paths = paths[paths.length - 1] === "" ? paths.slice(0, paths.length - 1) : paths;
        paths = paths[1] === "" ? paths.slice(1) : paths;
        let breadcrumb = paths.map((path, index) => {
            let arrow = index !== paths.length - 1 ? ' / ' : " ";
            if (index === 0) {
                return (<li key={index} className="px-1"><Link key={index} to="/">Home</Link>{arrow}</li>);
            }
            let url = paths.slice(0, index + 1).join('/');
            return (<li key={index} className="px-1"><Link key={index} to={url}>{path.replace('_', ' ')}</Link>{arrow + ' '} </li>);
        });
        return (<ul className="breadcrumbs bg-white mt-4 mb-0 ml-0 pl-0">{breadcrumb}</ul>);
    }
    render() {
        let breadcrumb = this.generateBreadCrumb(window.location.pathname);
        return (
           
            <div className="container mb-0">
                <nav className='breadcrumb bg-white p-0' aria-label="breadcrumb">  {breadcrumb}</nav>
            </div>)
            
    }
}


export default BreadcrumbsComponent;