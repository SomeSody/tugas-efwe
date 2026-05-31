import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button"

export default function Reports() {
  return (
    <div className="flex items-center justify-center h-full">
        <Empty>
            <EmptyHeader>
            <EmptyTitle>Belum Ada Laporan</EmptyTitle>
            <EmptyDescription>
                Fitur laporan masih dalam pengembangan.
            </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
                <Button>Buat Laporan</Button>
                <Button variant="outline">Import Laporan</Button>
            </EmptyContent>
        </Empty>
    </div>
  );
}