

const Impressum = () => {
  return (
<div className="footer flex flex-wrap px-10">
      <div className="w-full sm:w-1/2 md:w-1/2 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <p>Name:Jon Doe</p>
        <p>City: Munich</p>
        <p>Phone: +123412341234</p>
        <p>Email: johndoe@techstarter.de</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 p-4 text-xs">
        <h2 className="text-lg font-semibold mb-4">Legal Information</h2>
        <p>blalbalblablallbalblalblalblalblalblallalblalblblablabllbllab pragraph blalbalballblallblallblallblallbllallb</p>
        <p>Datenschutz: braucht kein mensch mehr weil das internet hat unsere daten eh trotzdem</p>
      </div>
    </div>
  );
}

export default Impressum;