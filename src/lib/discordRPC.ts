import { Client } from "discord-rpc";
import { getConfig } from "./config";

export var rpc: Client;

export async function connectRPC() {
    if (!getConfig().discordRPC) return;

    try {
        rpc = new Client({ transport: "ipc" });

        rpc.on("ready", () =>
            rpc.setActivity({
                state: "stoat.chat",
                details: "Chatting with others",
                largeImageKey: "qr",
                largeImageText: "Communication is critical – use Stoat.",
                buttons: [
                    {
                        label: "Join Stoat",
                        url: "https://stoat.chat/app",
                    },
                    { label: "Website", url: "https://stoat.chat/" },
                ],
            }),
        );

        // @ts-ignore
        rpc.on("disconnected", reconnect);

        rpc.login({ clientId: "872068124005007420" });
    } catch (err) {
        reconnect();
    }
}

const reconnect = () => setTimeout(() => connectRPC(), 1e4);

export async function dropRPC() {
    rpc?.destroy();
}
