import { formMeta } from "../../../lib/formMeta";
import FillPageClient from "./FillPageClient";

export function generateStaticParams() {
  return Object.keys(formMeta).map((formId) => ({ formId }));
}

export default async function FillPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const { formId } = await params;
  return <FillPageClient formId={formId} />;
}
