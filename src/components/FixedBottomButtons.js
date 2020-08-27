import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";

export default class FixedButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > window.pageYOffset;
        if (window.pageYOffset <= 0) {
            this.setState({
                visible: true
            })
        }
        else {
            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            });
        }

    };

    render() {

        const { visible } = this.state;

        return (<>
            <AnchorLink href="#head">
                {isMobile ? <div
                    className={visible ? 'top-the-top border p-1 pr-2 bg-white elem-ease-in' : 'top-the-top border p-1 pr-2 bg-white elem-ease-in top-the-top-anim'}
                    style={visible
                        ? {
                            bottom: '-200px'
                        }
                        : {
                            bottom: '5rem',
                        }}>

                    <FontAwesomeIcon style={{ fontSize: '2em', paddingLeft: '5px', color: '#000' }} icon={faChevronUp} />

                </div> : <div
                    className={visible ? 'top-the-top border p-1 pr-2 bg-white elem-ease-in' : 'top-the-top border p-1 pr-2 bg-white elem-ease-in top-the-top-anim'}
                    style={visible
                        ? {
                            bottom: '-200px'
                        }
                        : {
                            bottom: '6rem',
                        }}>

                        <FontAwesomeIcon style={{ fontSize: '2em', paddingLeft: '5px', color: '#000' }} icon={faChevronUp} />

                    </div>}
            </AnchorLink>
        </>
        )
    }
}









// export default function FixedButtons ()  {

//     const [visible, setVisible] = useState(false)
//     const [prevScrollPos, setPrevScrollPos] = useRef(window.pageYOffset)
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollPos = window.pageYOffset;
//             const visibleVar = 200 > window.pageYOffset;
//             setVisible(visibleVar)
//             setPrevScrollPos(currentScrollPos)
//         }

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//     })

//     return (
//         <div
//             className={visible ? 'top-the-top border p-1 pr-2 bg-white elem-ease-in' : 'top-the-top border p-1 pr-2 bg-white elem-ease-in top-the-top-anim'}
//             style={visible
//                 ? {
//                     bottom: '-200px'
//                 }
//                 : {
//                     bottom: '5rem',
//                 }}>

//             <FontAwesomeIcon style={{ fontSize: '2em', paddingLeft: '5px', color: '#000' }} icon={faChevronUp} />

//         </div>);

// }


