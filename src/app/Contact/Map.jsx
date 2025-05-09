const MapSection = () => {
    return (
      <section className="w-full h-[450px] py-10 relative">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.862072791471!2d73.974732!3d18.580256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38429004771%3A0x95e60873b827e7aa!2sVM3%20Tech%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1746774926818!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default MapSection;
  