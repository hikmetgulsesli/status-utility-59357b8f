// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col justify-between p-8" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_ROUTE_UNCHANGED OBS_REFRESH_STATUS_STATUS_PERSISTED_AFTER_RELOAD OBS_REFRESH_STATUS_STATUS_TEXT_SHOWN OBS_REFRESH_STATUS_STATUS_VALUE_REFRESHED">
          <header className="flex items-center justify-between border-b border-slate-200 pb-6 max-w-5xl w-full mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">Status Utility</h1>
                <p className="text-xs text-slate-500 font-mono">Route: /status</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Operational Environment</span>
            </div>
          </header>
      
          <main className="flex-1 flex items-center justify-center py-12">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-2 bg-emerald-500 w-full"></div>
              <div className="p-8 sm:p-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
      
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">System Status Console</h2>
                <p className="text-sm text-slate-600 mb-8 max-w-md">
                  Monitor and trigger utility state updates across service layers. Active route verification maintains diagnostic continuity.
                </p>
      
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-left space-y-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
                    <span>Utility Parameter</span>
                    <span>Current Value</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium text-slate-700">Diagnostic Status</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-mono">refreshed</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm font-medium text-slate-700">Report Message</span>
                    <span className="text-sm text-slate-900 font-medium">Status refreshed</span>
                  </div>
                </div>
      
                <button data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none shadow-sm transition" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_CONTROL_VISIBLE_ENABLED" type="button" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  Refresh Status
                </button>
                
                <p className="text-xs text-slate-500 mt-4">
                  Triggers diagnostic refresh and synchronizes current state
                </p>
              </div>
            </div>
          </main>
      
          <footer className="max-w-5xl w-full mx-auto pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <div>
              Status Utility Specification v2 - Route /status
            </div>
            <div className="mt-2 sm:mt-0 font-mono">
              All systems nominal
            </div>
          </footer>
        </div>
    </>
  );
}
