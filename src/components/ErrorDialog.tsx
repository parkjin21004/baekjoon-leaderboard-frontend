import type { AxiosError } from "axios";

function ErrorDialog({ error }: { error: AxiosError }) {
    return (
        <div className="flex h-[50vh] items-center justify-center">
            {error.code === "ECONNABORTED" && (
                <div className="font-dohyeon gpa-2 flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <h1>{"데이터를 불러오는 시간이 너무 오래걸려요."}</h1>
                    <h1>{"잠시 후 다시 시도해주세요!"}</h1>
                </div>
            )}
            {error.response?.status &&
                error.response?.status >= 400 &&
                error.response?.status < 500 && (
                    <div className="font-dohyeon gpa-2 flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                        <h1>{"클라이언트에서 에러가 발생했어요."}</h1>
                        <h1>{"잠시 후 다시 시도해주세요!"}</h1>
                    </div>
                )}
            {error.response?.status && error.response?.status >= 500 && (
                <div className="font-dohyeon gpa-2 flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <h1>{"서버에서 에러가 발생했어요."}</h1>
                    <h1>{"잠시 후 다시 시도해주세요!"}</h1>
                </div>
            )}
        </div>
    );
}

export default ErrorDialog;
