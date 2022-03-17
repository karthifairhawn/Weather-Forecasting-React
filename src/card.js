import Card from '@mui/material/Card';

const ClimateCard = ({blue,title,humidity,temp}) => {
    return ( 
        <Card className={blue===true ? "climate-card  blue" : "climate-card"}>
            <span className="card-title">{title}</span>
            <hr style={{width:"100%"}}/>
            <div className="card-image"></div>  
            <span className="card-sub">Humitity</span>
            <span>{humidity}</span>
            <span className="card-sub">Temperature</span>
            <span>{temp}</span>
        </Card>
     );
}
 
export default ClimateCard;