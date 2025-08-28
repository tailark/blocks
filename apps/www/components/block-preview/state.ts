import { type ImperativePanelGroupHandle } from 'react-resizable-panels';

export type PreviewMode = 'preview' | 'code';

export interface PreviewState {
  mode: PreviewMode;
  copied: {
    cli: boolean;
  };
  panelSizes: {
    preview: number;
    code: number;
  };
  isPanelCollapsed: boolean;
}

type PreviewAction =
  | { type: 'SET_MODE'; payload: PreviewMode }
  | { type: 'SET_COPIED_CLI'; payload: boolean }
  | { type: 'SET_PANEL_SIZES'; payload: { preview: number; code: number } }
  | { type: 'TOGGLE_PANEL' };

export const initialState: PreviewState = {
  mode: 'preview',
  copied: {
    cli: false,
  },
  panelSizes: {
    preview: 50,
    code: 50,
  },
  isPanelCollapsed: false,
};

export const previewReducer = (state: PreviewState, action: PreviewAction): PreviewState => {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'SET_COPIED_CLI':
      return { ...state, copied: { ...state.copied, cli: action.payload } };
    case 'SET_PANEL_SIZES':
      return { ...state, panelSizes: action.payload };
    case 'TOGGLE_PANEL':
      return {
        ...state,
        isPanelCollapsed: !state.isPanelCollapsed,
        panelSizes: {
          preview: state.isPanelCollapsed ? 50 : 0,
          code: state.isPanelCollapsed ? 50 : 100,
        },
      };
    default:
      return state;
  }
};

interface PreviewActions {
  handleModeChange: (mode: PreviewMode) => void;
  handleCliCopy: (e: React.MouseEvent<HTMLButtonElement>) => void;
  togglePanel: () => void;
  setPanelSizes: (sizes: number[]) => void;
}

export const usePreviewActions = (
  state: PreviewState,
  dispatch: React.Dispatch<PreviewAction>,
  panelGroupRef: React.RefObject<ImperativePanelGroupHandle | null>,
  onCliCopy: (e: React.MouseEvent<HTMLButtonElement>) => void,
): PreviewActions => {
  const handleModeChange = (mode: PreviewMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  const handleCliCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCliCopy(e);
  };

  const togglePanel = () => {
    dispatch({ type: 'TOGGLE_PANEL' });
    setTimeout(() => {
      panelGroupRef.current?.setLayout([
        state.isPanelCollapsed ? 50 : 0,
        state.isPanelCollapsed ? 50 : 100,
      ]);
    }, 0);
  };

  const setPanelSizes = (sizes: number[]) => {
    dispatch({
      type: 'SET_PANEL_SIZES',
      payload: { preview: sizes[0], code: sizes[1] },
    });
  };

  return {
    handleModeChange,
    handleCliCopy,
    togglePanel,
    setPanelSizes,
  };
};
