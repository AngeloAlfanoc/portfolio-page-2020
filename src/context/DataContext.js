import React from 'react'
import axios from 'axios'

const defaultArr = {}
export const DataContext = React.createContext(defaultArr)

class DataContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        this.Data()
    }
    setData = async() => {

        await
        axios
            .get('https://methods.guru/wp-json/wp/v2/portfolio')
            .then((result) => {
                this.setState({isLoaded: true, data: result.data});
            }, (error) => {
                this.setState({isLoaded: false, error});
            })

        }
    render() {
        const {children} = this.props
        const {isLoaded} = this.state;
        if (isLoaded) {
            return (
                <DataContext.Provider
                    value={
                    this.state
                }>
                    {children}
                </DataContext.Provider>
            );
        } else {
            return ''
        }

    }

}
export default DataContext;

export {DataContextProvider}