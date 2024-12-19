const Info = () => {
  return (
    <>
      <h1>Information</h1>
      <section className="info">
        <div className="info__part">
          <div className="info__part_key">
            <p className="margin-bottom">Block</p>
            <p>Reward</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">12345</p>
            <p>624</p>
          </div>
        </div>
        <div className="info__part">
          <div className="info__part_key2">
            <p className="margin-bottom">Complexity</p>
            <p>Online</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">1.9K</p>
            <p>10K</p>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="info__part">
          <div className="info__part_key">
            <p className="margin-bottom">Status</p>
            <p>Hashes</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom special_p">Waiting</p>
            <p>0</p>
          </div>
        </div>
        <div className="info__part">
          <div className="info__part_key2">
            <p className="margin-bottom">Shares</p>
            <p>Income</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">0</p>
            <p>0</p>
          </div>
        </div>
      </section>
      <button className="button">Start mining</button>
    </>
  );
};

export default Info;
