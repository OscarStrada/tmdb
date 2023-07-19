import getPersonById from "@/actions/getPersonById";
import { Actor } from "@/app/components";

interface Params {
  id: string;
}

const PersonPage = async ({ params }: { params: Params }) => {
  const person = await getPersonById(params.id);

  return (
    <div className="container flex gap-8 py-10">
      <Actor person={person} />
    </div>
  );
};

export default PersonPage;
