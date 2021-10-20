import { ClientsInfo } from "./ClientsInfo";

const Clients = () => {
  return (
    <div className="full-pages-client">
      <div className="client-testimonials">
        <h2>CLIENT TESTIMONIALS</h2>
      </div>
      <div className="pages-client">
        {ClientsInfo.map((x) => (
          <div className="page-client">
            <div className="img-client">
              <img src={x.img} alt="clients" />
            </div>
            <div className="text-client">
              <p>{x.text}</p>
            </div>
            <div className="name-client">
              <h2>{x.name}</h2>
            </div>
            <div className="skill-client">
              <span>{x.skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
