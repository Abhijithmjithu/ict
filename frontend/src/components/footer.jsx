import vlogo from './letter-v1.png';

const container=({
    display:"flex",
    justifyContent:"space-between",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,.7))",
    boxShadow:"0 8px 32px 0 rgba(0,0,0,.5)",
    backdropFilter:"blur(10px)",
    WebkitBackdropFilter:"blur(10px)",
    padding: "20px 20px",
    height: "80px",
    width: "auto",
    marginTop: "50px",
    color:"white",
    alignItems:"center",
    textShadow: "2px 2px 4px rgba(200, 200, 200,.2)"
});


const iconStyle = {
    width: "30px",
    height: "30px", 
    objectFit: "contain"
};

function Footer(){
    return(
        <div style={container}>
            <div>
                <h3><img style={iconStyle} src={vlogo} alt="" />ASTHRAM.COM</h3>
            </div>

            <div>
                <p>address line 1</p>
                <p>address line 2</p>
                <p>address line 3</p>
            </div>

            <div>
                <p>support : vasthram@gmail,com</p>
            </div>
        </div>
    )
}

export default Footer;