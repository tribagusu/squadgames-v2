import Company from "./company";

export default function TrustedBy() {
  return (
    <section className="space-y-6 pt-[4rem] md:pt-[7rem] pb-[3rem] md:pb-[6rem]">
      <div className="container flex-row justify-center items-center">
        <h3 className="text-center text-lg md:text-xl font-medium">
          Telah dipercaya 500+ perusahaan di berbagai industri
        </h3>
      </div>
      <div className="container relative">
        <Company />
      </div>
    </section>
  );
}
