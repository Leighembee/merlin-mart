import React from 'react'
import { connect } from 'react-redux'
import './style.css'

const Orders = () => (
  <div className="Rtable Rtable--4cols">
    <div className="Rtable-cell"><h3>Eddard Stark</h3></div>
    <div className="Rtable-cell">Has a sword named Ice</div>
    <div className="Rtable-cell">No direwolf</div>
    <div className="Rtable-cell"><strong>Lord of Winterfell</strong></div>
  
    <div className="Rtable-cell"><h3>Jon Snow</h3></div>
    <div className="Rtable-cell">Has a sword named Longclaw</div>
    <div className="Rtable-cell">Direwolf: Ghost</div>
    <div className="Rtable-cell"><strong>Knows nothing</strong></div>
  
    <div className="Rtable-cell"><h3>Arya Stark</h3></div>
    <div className="Rtable-cell">Has a sword named Needle</div>
    <div className="Rtable-cell">Direwolf: Nymeria</div>
    <div className="Rtable-cell"><strong>No one</strong></div>
  </div>
)

const mapState = ({ orders }) => ({ orders })

export default connect(mapState)(Orders)
