import { GetStaticPropsContext } from "next";

type Props = {
  content: string
};

function Result({ content }: Props) {

  return (
    <>
    <div className="w-auto h-auto flex items-center justify-center py-6 px-10 bg-[#1D21BF26] text-white font-semibold font-poppins text-xl md:text-2xl border rounded-[2rem] border-[#7275FF]">
        <h3>
            {content}
        </h3>
    </div>
    </>
  );
}

export default Result;