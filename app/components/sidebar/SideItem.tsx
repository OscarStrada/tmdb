interface Props {
  title: string;
  data: string | undefined;
}

export const SideItem = ({ title, data }: Props) => {
  return (
    <div>
      <h3 className="font-semibold capitalize">{title}</h3>
      <span className="capitalize text-muted-foreground">{data}</span>
    </div>
  );
};

export default SideItem;
