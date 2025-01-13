import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="SCO-12" invert={invert}>
          Sector-14
          <br />
          Opp. Plaza Solitaire Hotel Old Delhi Road, Gurgaon-122001 
          <br />
          <br />
          mehtaelectrical.mehta@gmail.com
        </Office>
      </li>
      <li>
        <Office name="Phone" invert={invert}>
          0124-4088675
          <br />
          9911529995
          <br />
          9643959995
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
