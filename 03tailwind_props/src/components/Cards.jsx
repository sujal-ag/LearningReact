import React from "react";

function Cards({userName="Hello"}) {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem]">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <h1 className="font-bold text-white text-base leading-tight">
              {userName}
            </h1>
            <h1 className="text-white text-sm">Price</h1>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-300">#345</p>
            <p className="text-gray-300">0.01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
